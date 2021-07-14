// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss")


module.exports = {
  siteName: 'I Am Uayeb',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          {tailwindcss},
          {
            use: '@gridsome/source-filesystem',
            options: {
              typeName: 'Project',
              path: 'projects/**/*.md',
              refs: {
                // Create a Tag content type and its nodes automatically.
                tags: {
                  typeName: 'Tag',
                  create: true
                }
              }
            }
          }
        ],
        templates:{
          Project:[
            {
            path:"/projects/:title",
            componet:"./src/templates/Project.vue"
          }
        ],
          Tag:[
            {
              path:"tags/:id",
              componet:".src/templates/Tag.vue"
            }
          ]
        }
      },
    },
  }
}
