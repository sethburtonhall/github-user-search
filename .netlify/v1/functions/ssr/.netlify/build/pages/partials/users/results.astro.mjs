import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, d as createAstro } from '../../../chunks/astro/server_BdFo2NFO.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Picture } from '../../../chunks/_astro_assets_2bKjWNW6.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { c as cn } from '../../../chunks/utils_B05Dmz_H.mjs';
import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
export { renderers } from '../../../renderers.mjs';

const daft2 = new Proxy({"src":"/_astro/daftpunktocat-guy.aQwa7dK7.gif","width":896,"height":896,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/seth/apps/github-user-search/public/daftpunktocat-guy.gif";
							}
							
							return target[name];
						}
					});

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const Pagination$1 = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: cn("mx-auto flex w-full justify-center", className),
    ...props
  }
);
Pagination$1.displayName = "Pagination";
const PaginationContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    className: cn("flex flex-row items-center gap-1", className),
    ...props
  }
));
PaginationContent.displayName = "PaginationContent";
const PaginationItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, className: cn("", className), ...props }));
PaginationItem.displayName = "PaginationItem";
const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => /* @__PURE__ */ jsx(
  "a",
  {
    "aria-current": isActive ? "page" : void 0,
    className: cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size
      }),
      className
    ),
    ...props
  }
);
PaginationLink.displayName = "PaginationLink";
const PaginationPrevious = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs(
  PaginationLink,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: cn("gap-1 pl-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { children: "Previous" })
    ]
  }
);
PaginationPrevious.displayName = "PaginationPrevious";
const PaginationNext = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs(
  PaginationLink,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: cn("gap-1 pr-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { children: "Next" }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
    ]
  }
);
PaginationNext.displayName = "PaginationNext";

function Pagination(props) {
  const { query, page, totalPages } = props;
  return /* @__PURE__ */ jsx(Pagination$1, { children: /* @__PURE__ */ jsxs(PaginationContent, { children: [
    /* @__PURE__ */ jsx(
      PaginationItem,
      {
        "hx-get": `/partials/users/results?query=${query}&page=${page - 1}`,
        "hx-target": "#users-list",
        "hx-trigger": "click",
        "hx-swap": "innerHTML",
        children: /* @__PURE__ */ jsx(
          PaginationPrevious,
          {
            href: "#",
            className: cn(
              page <= 1 && "pointer-events-none opacity-50 hover:bg-transparent"
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      PaginationItem,
      {
        "hx-get": `/partials/users/results?query=${query}&page=${page + 1}`,
        "hx-target": "#users-list",
        "hx-trigger": "click",
        "hx-swap": "innerHTML",
        children: /* @__PURE__ */ jsx(
          PaginationNext,
          {
            href: "#",
            className: cn(
              page >= totalPages && "pointer-events-none opacity-50 hover:bg-transparent"
            )
          }
        )
      }
    )
  ] }) });
}

const $$Astro = createAstro();
const partial = true;
const $$Results = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Results;
  const query = Astro2.url.searchParams.get("query") || "";
  const page = parseInt(Astro2.url.searchParams.get("page") || "1", 10);
  let users = [];
  let totalCount = 0;
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}&per_page=15&page=${page}`
    );
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    users = data.items || [];
    totalCount = data.total_count || 0;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
  const totalPages = Math.ceil(totalCount / 15);
  return renderTemplate`${users.length === 0 && renderTemplate`${maybeRenderHead()}<h3 class="text-center text-lg font-semibold">No users found, please try again.</h3>
      ${renderComponent($$result, "Picture", $$Picture, { "src": daft2, "alt": "No users found", "class": "mx-auto aspect-square w-96 rounded-full mt-24" })}`}<ul class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5"> ${users.length > 0 && users.map((user) => renderTemplate`<li class="rounded bg-white p-4 shadow"> <img${addAttribute(user.avatar_url, "src")}${addAttribute(user.login, "alt")} class="mb-2 h-16 w-16 rounded-full"> <p class="font-semibold">${user.login}</p> </li>`)} </ul> ${users.length > 0 && renderTemplate`<div class="mt-12"> ${renderComponent($$result, "Pagination", Pagination, { "query": query, "page": page, "totalPages": totalPages })} </div>`}`;
}, "/Users/seth/apps/github-user-search/src/pages/partials/users/results.astro", void 0);

const $$file = "/Users/seth/apps/github-user-search/src/pages/partials/users/results.astro";
const $$url = "/partials/users/results";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Results,
	file: $$file,
	partial,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
