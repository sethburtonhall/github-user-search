import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('')
  const [pageCount, setPageCount] = useState()

  // I needed help with how to best handle the data from the api call, so I referenced the codebase of an open source project where I am a core team member. I can talk through and explain the code I just needed support on the approach.

  async function getUsers(e) {
    e.preventDefault()

    const response = await fetch(
      `https://api.github.com/search/users?q=${searchTerm}&per_page=5&page=1`
    );

    const rawUsers = await response.json();

    const individualUserResponses = await Promise.all(
      rawUsers.items.map(({ url }) => fetch(url))
    )

    const individualUserInfo = await Promise.all(
      individualUserResponses.map((userResponse) => userResponse.json())
    )

    const users = rawUsers.items.map((user, index) => {
      const fullUserProfileInfo = {
        ...user,
        ...individualUserInfo[index]
      }
      return fullUserProfileInfo;
    })

    setSearchResults(users)
    setPageCount(rawUsers.total_count)
  }

  async function handlePaginationClick(pageNumber) {

    const response = await fetch(
      `https://api.github.com/search/users?q=${searchTerm}&per_page=5&page=${pageNumber}`
    );
    const rawUsers = await response.json();

    const individualUserResponses = await Promise.all(
      rawUsers.items.map(({ url }) => fetch(url))
    );

    const individualUserInfo = await Promise.all(
      individualUserResponses.map((userResponse) => userResponse.json())
    );

    const users = rawUsers.items.map((user, index) => {
      const fullUserProfileInfo = {
        ...user,
        ...individualUserInfo[index],
      };

      return fullUserProfileInfo;
    });

    setSearchResults(users);
  }

  return (
    <>
      <header className="p-5 bg-black">
        <div className="container flex mx-auto space-x-4">
          <IconContext.Provider
            value={{ color: 'white', className: 'w-8 h-8' }}
          >
            <FaGithub />
          </IconContext.Provider>
          <h1 className="text-2xl text-white">Github Search</h1>
        </div>
      </header>

      <main className="p-5 pt-6">
        <div className="container mx-auto">
          <form className="flex mb-4 space-x-4" onSubmit={getUsers}>
            <input
              type="text"
              className="flex-1 p-2 border rounded"
              placeholder="Please enter a username"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <button type="submit" className="p-2 text-white bg-black rounded">
              Search
            </button>
          </form>

          <div className="mb-3">
            {searchResults.length ? (
              <>
                <div className="mb-4 font-bold">
                  {searchResults.length} search result
                  {searchResults.length > 1 ? 's' : ''}
                </div>

                <ul>
                  {searchResults.map((user) => (
                    <li key={user.id} className="mb-4 border rounded">
                      <a href={user.url} className="block p-4">
                        <div className="flex flex-col items-center md:flex-row md:items-start">
                          <img
                            src={user.avatar_url}
                            alt="user avatar"
                            className="w-24 h-24 mb-4 mr-4 rounded-full md:mb-0"
                          />
                          <div className="flex flex-col space-y-2 text-center md:text-left">
                            <div className="mr-2 font-bold">
                              <span className="mr-3">{user.name}</span>
                              <span className="text-xs italic font-normal">
                                {user.followers} followers
                              </span>
                            </div>

                            <div>{user.bio}</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              null
            )}
          </div>

          {searchResults.length && searchResults.length > 1 ? (
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              containerClassName={'flex justify-around w-1/2 mx-auto'}
              activeClassName={'text-blue-500'}
              disabledClassName={'opacity-50'}
              previousClassName={'bg-gray-300 p-1 rounded w-20 text-center'}
              nextClassName={'bg-gray-300 p-1 rounded w-20 text-center'}
              previousLinkClassName={'text-blue-500'}
              nextLinkClassName={'text-blue-500'}
              onPageChange={(e) => handlePaginationClick(e.selected + 1)}
            />
          ) : null}
        </div>
      </main>
    </>
  );
}

export default App;
