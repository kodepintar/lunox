"use strict";(self.webpackChunklunox=self.webpackChunklunox||[]).push([[5145],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8203:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var a=n(5900),r=n(4750),i=(n(9496),n(9613)),o=["components"],l={sidebar_position:1},s="Getting Started",u={unversionedId:"database/getting-started",id:"database/getting-started",title:"Getting Started",description:"Introduction",source:"@site/docs/database/getting-started.md",sourceDirName:"database",slug:"/database/getting-started",permalink:"/lunox/id/docs/database/getting-started",editUrl:"https://github.com/kodepandai/lunox-website/edit/main/docs/database/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Artisan Console",permalink:"/lunox/id/docs/digging-deeper/artisan-console"},next:{title:"Query Builder",permalink:"/lunox/id/docs/database/query-builder"}},d=[{value:"Introduction",id:"introduction",children:[{value:"Configuration",id:"configuration",children:[],level:3}],level:2},{value:"Running SQL Queries",id:"running-sql-queries",children:[{value:"Running A Select Query",id:"running-a-select-query",children:[{value:"Basic Select Query",id:"basic-select-query",children:[],level:4},{value:"Select With Condition",id:"select-with-condition",children:[],level:4},{value:"Return First Row of Selected Data",id:"return-first-row-of-selected-data",children:[],level:4}],level:3},{value:"Running An Insert Statement",id:"running-an-insert-statement",children:[],level:3},{value:"Running An Update Statement",id:"running-an-update-statement",children:[],level:3},{value:"Running A Delete Statement",id:"running-a-delete-statement",children:[],level:3}],level:2},{value:"Database Transaction",id:"database-transaction",children:[{value:"As A Query Builder",id:"as-a-query-builder",children:[],level:3},{value:"As An Object Passed Into A Query",id:"as-an-object-passed-into-a-query",children:[],level:3}],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"You can use any third party database manager, but lunox already shipped builtin database manager. Lunox makes interacting with database simple. Under the hood, lunox database manager is using ",(0,i.kt)("a",{parentName:"p",href:"http://knexjs.org/"},"knex"),", so you can read the official documentation for complete knex's API reference. Lunox wrap ",(0,i.kt)("inlineCode",{parentName:"p"},"knex")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"DB")," facade. We also integrate it to artisan command. So we can create migration, seeder, run and rollback migration using artisan command. We will discuss it later."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The configuration for Lunox's database services is located in your application's ",(0,i.kt)("inlineCode",{parentName:"p"},"config/database.ts")," configuraiton file. In this file, you may define all of your database connections, as well as specify which connection should be used by default. Most of the configuration options within this file are driven by the values of your application's environment variables. Examples for most of Lunox's supported database systems are provided in this file."),(0,i.kt)("p",null,"For now Lunox only support these drivers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mariadb"),", please install ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," as dependency."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgresql"),", please install ",(0,i.kt)("inlineCode",{parentName:"li"},"pg")," as dependency."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sqlite"),", please install ",(0,i.kt)("inlineCode",{parentName:"li"},"sqlite3")," as dependency.")),(0,i.kt)("h2",{id:"running-sql-queries"},"Running SQL Queries"),(0,i.kt)("p",null,"Once you have configured your database connection, you may run queries using the ",(0,i.kt)("inlineCode",{parentName:"p"},"DB")," facade. The ",(0,i.kt)("inlineCode",{parentName:"p"},"DB")," facade provides ",(0,i.kt)("inlineCode",{parentName:"p"},"table")," method to initialize query. "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that all query running asyncronously."))),(0,i.kt)("h3",{id:"running-a-select-query"},"Running A Select Query"),(0,i.kt)("h4",{id:"basic-select-query"},"Basic Select Query"),(0,i.kt)("p",null,"To run a basic ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query, you may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"select")," method on the ",(0,i.kt)("inlineCode",{parentName:"p"},"DB")," facade:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {DB} from \"lunox\";\n\n// select all row from table `users`.\nawait DB.table('users');\n\n// select only some columns.\nawait DB.table('users').select('id', 'email', 'user_name');\n")),(0,i.kt)("h4",{id:"select-with-condition"},"Select With Condition"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"where")," method to add ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," clause in query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await DB.table('users').where('email', 'foo@example.com');\n\n// multiple condition using object\nawait DB.table('users').where({\n email: 'foo@example.com',\n active: 1\n})\n\n// chainable where\nawait DB.table('users')\n  .where('email', 'foo@example.com')\n  .where('active', 1)\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"note"),": for complete guide about where clause, see ",(0,i.kt)("a",{parentName:"p",href:"https://knexjs.org/guide/query-builder.html#where-clauses"},"knex`s where clauses")," documentation.")),(0,i.kt)("h4",{id:"return-first-row-of-selected-data"},"Return First Row of Selected Data"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"first")," method to return only first row."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await DB.table('users').where('email', 'foo@example.com').first();\n")),(0,i.kt)("h3",{id:"running-an-insert-statement"},"Running An Insert Statement"),(0,i.kt)("p",null,"To execute an insert statement, you may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"insert")," method on the ",(0,i.kt)("inlineCode",{parentName:"p"},"DB")," facade."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"\n// insert into table users\nawait DB.table('users').insert({\n  email: 'foo@example.com',\n  user_name: 'exampleuser',\n  first_name: 'foo',\n  last_name: 'bar'\n});\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"note"),": for complete guide about insert statement, please read ",(0,i.kt)("a",{parentName:"p",href:"https://knexjs.org/guide/query-builder.html#insert"},"knex`s insert documentation"))),(0,i.kt)("h3",{id:"running-an-update-statement"},"Running An Update Statement"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," method should be used to update existing records in the database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await DB.table('users')\n  .where('id', 24)\n  .update('active', 0);\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"note"),": for complete guide about update statement, please read ",(0,i.kt)("a",{parentName:"p",href:"https://knexjs.org/guide/query-builder.html#update"},"knex`s update documentation"))),(0,i.kt)("h3",{id:"running-a-delete-statement"},"Running A Delete Statement"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," method should be used to delete records from the database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await DB.table('users')\n  .where('active', 0)\n  .delete();\n")),(0,i.kt)("h2",{id:"database-transaction"},"Database Transaction"),(0,i.kt)("p",null,"You may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction")," method provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"DB")," facade to run a set of operations within a database transaction. If an exception is thrown within the transaction closure, the transaction will automatically be rolled back and the exception is re-thrown. If the closure executes successfully, the transaction will automatically be committed. You don't need to worry about manually rolling back or committing while using the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction")," method."),(0,i.kt)("p",null,"Transactions are handled by passing a handler function into ",(0,i.kt)("inlineCode",{parentName:"p"},"DB.transaction"),". The handler function accepts a single argument, an object which may be used in two ways:"),(0,i.kt)("h3",{id:"as-a-query-builder"},"As A Query Builder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n await DB.transaction(async(trx)=>{\n   // using trx as query builder\n   const userIds = await trx('users').insert({\n    email: 'foo@mail.com'\n   })\n \n   await trx('books').insert({\n    user_id: userIds[0],\n    name: 'Lunox Documentation'\n   });\n })\n} catch(error){\n  // If we get here, that means that neither the 'user' and 'book' are inserted,\n  console.log(error)\n  abort(400, 'cannot insert to database');\n}\n")),(0,i.kt)("h3",{id:"as-an-object-passed-into-a-query"},"As An Object Passed Into A Query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n await DB.transaction(async(trx)=>{\n   // using trx as query builder\n   const userIds = await DB.table('users').insert({\n    email: 'foo@mail.com'\n   })\n   .transacting(trx)\n \n   await DB.table('books').insert({\n    user_id: userIds[0],\n    name: 'Lunox Documentation'\n   })\n   .transacting(trx)\n })\n} catch(error){\n  // If we get here, that means that neither the 'user' and 'book' are inserted,\n  console.log(error)\n  abort(400, 'cannot insert to database');\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"note"),": please read ",(0,i.kt)("a",{parentName:"p",href:"https://knexjs.org/guide/transactions.html"},"knex's transaction documentation")," for more detail")))}p.isMDXComponent=!0}}]);