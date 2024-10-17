import React, { useEffect, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";

const menus: any = [
  {
    title: "首页"
  },
  {
    title: "前端开发",
    children: [
      {
        title: "HTML/CSS",
        children: [
          {
            title: "HTML5 新特性",
            link: "/frontend/html5"
          },
          {
            title: "CSS Flexbox & Grid",
            link: "/frontend/css-flexbox-grid"
          },
          {
            title: "TailwindCSS",
            link: "/frontend/tailwindcss"
          }
        ]
      },
      {
        title: "JavaScript",
        children: [
          {
            title: "ES6+ 语法",
            link: "/frontend/javascript/es6"
          },
          {
            title: "React",
            link: "/frontend/javascript/react"
          },
          {
            title: "Vue",
            link: "/frontend/javascript/vue"
          }
        ]
      },
      {
        title: "前端工具",
        children: [
          {
            title: "Webpack",
            link: "/frontend/tools/webpack"
          },
          {
            title: "Vite",
            link: "/frontend/tools/vite"
          },
          {
            title: "ESLint",
            link: "/frontend/tools/eslint"
          }
        ]
      }
    ]
  },
  {
    title: "后端开发",
    children: [
      {
        title: "Node.js",
        children: [
          {
            title: "Express",
            link: "/backend/nodejs/express"
          },
          {
            title: "Koa",
            link: "/backend/nodejs/koa"
          },
          {
            title: "NestJS",
            link: "/backend/nodejs/nestjs"
          }
        ]
      },
      {
        title: "Go",
        children: [
          {
            title: "Gin",
            link: "/backend/go/gin"
          },
          {
            title: "Beego",
            link: "/backend/go/beego"
          },
          {
            title: "Fiber",
            link: "/backend/go/fiber"
          }
        ]
      },
      {
        title: "PHP",
        children: [
          {
            title: "Laravel",
            link: "/backend/php/laravel"
          },
          {
            title: "Symfony",
            link: "/backend/php/symfony"
          },
          {
            title: "Yii",
            link: "/backend/php/yii"
          }
        ]
      }
    ]
  },
  {
    title: "数据库",
    children: [
      {
        title: "SQL 数据库",
        children: [
          {
            title: "MySQL",
            link: "/database/sql/mysql"
          },
          {
            title: "PostgreSQL",
            link: "/database/sql/postgresql"
          },
          {
            title: "SQLite",
            link: "/database/sql/sqlite"
          }
        ]
      },
      {
        title: "NoSQL 数据库",
        children: [
          {
            title: "MongoDB",
            link: "/database/nosql/mongodb"
          },
          {
            title: "Redis",
            link: "/database/nosql/redis"
          },
          {
            title: "Cassandra",
            link: "/database/nosql/cassandra"
          }
        ]
      }
    ]
  },
  {
    title: "云计算与DevOps",
    children: [
      {
        title: "云平台",
        children: [
          {
            title: "AWS",
            link: "/cloud/aws"
          },
          {
            title: "Azure",
            link: "/cloud/azure"
          },
          {
            title: "Google Cloud",
            link: "/cloud/google-cloud"
          }
        ]
      },
      {
        title: "DevOps 工具",
        children: [
          {
            title: "Docker",
            link: "/devops/tools/docker"
          },
          {
            title: "Kubernetes",
            link: "/devops/tools/kubernetes"
          },
          {
            title: "Jenkins",
            link: "/devops/tools/jenkins"
          }
        ]
      }
    ]
  }
];

const Menus = (props: any) => {
  const { menus, level = 0 } = props;
  return menus.map((menu: any) => {
    return (
      <li
        key={menu.title}
        className={classNames({
          ["relative"]: true,
          ["text-sm cursor-pointer"]: true
        })}
      >
        <a
          className={classNames({
            ["block"]: true,
            ["flex justify-center items-center h-[50px]"]: level === 0,
            ["w-[130px] pl-[30px] pr-[25px] py-2.5"]: level > 0
          })}
        >
          <span>{menu.title}</span>
        </a>
        {menu?.children?.length > 0 && (
          <ul
            className={classNames({
              ["bg-white opacity-0 invisible absolute t-0 l-0 py-2.5 overflow-hidden` rounded shadow-[0_0_20px_-5px_rgba(158,158,158,0.22)] transition-opacity duration-[250ms]"]:
                true,
              [`category category-${level + 1}`]: true
            })}
          >
            <Menus menus={menu?.children} level={level + 1} />
          </ul>
        )}
      </li>
    );
  });
};

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      // 获取公共头的高度
      const headerHeight = ref.current.offsetHeight;
      // 设置公共头的高度
      document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
    }
  }, []);

  return (
    <>
      <header ref={ref} className="bg-white fixed t-0 w-full z-10">
        <div className="container flex items-center justify-between mx-auto">
          <div>logo</div>
          <div>
            <div className="flex w-[600px] h-[36px] bg-input-bg rounded-lg my-[10px]">
              <input
                placeholder="搜索感兴趣的知识和文章"
                className="w-full h-full px-4 py-2 text-sm bg-transparent color-input-color outline-none"
              />
              <div className="flex items-center">
                <MagnifyingGlassIcon className="h-6 px-2" />
              </div>
            </div>
          </div>
        </div>

        <div className="navbar container mx-auto flex border-t border-t-[rgba(0, 0, 0, .05)]">
          <ul className="category-0 flex-1 flex gap-[30px]">
            <Menus menus={menus} />
          </ul>
          <div></div>
        </div>
      </header>
    </>
  );
};

export default Header;
