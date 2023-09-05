import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { createHtmlPlugin } from 'vite-plugin-html'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    root: 'src',
    publicDir: 'src',
    build: {
      outDir: '../dist',
      cssMinify: 'lightningcss'
    },
    plugins: [
        // viteStaticCopy({
        //     targets: [
        //         {
        //           src: './resources/phpmailer',
        //           dest: './',
        //         },
        //         {
        //           src: './resources/send.php',
        //           dest: './',
        //         },
        //     ],
        // }),
        handlebars({
          partialDirectory: 'src/partials',
        }),
        ViteSvgSpriteWrapper({
          icons: 'src/img/svg/*.svg',
          outputDir: 'src/img'
        }),
        ViteImageOptimizer({
          exclude: 'sprite.svg',
          svg: {
            js2svg: {
              pretty: true
            },
          },
          jpg: {
            quality: 75
          },
          jpeg: {
            quality: 75
          },
          png: {
            quality: 75
          }
        }),
        createHtmlPlugin({
          minify: true
        })
    ]
})
