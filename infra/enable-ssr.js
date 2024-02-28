const pathHelper = require('path');

module.exports = function(babel) {
  if (!process.env.NEXT_PUBLIC_SSR) {
    return {};
  }
  return {
    visitor: {
      Program(path, state) {
        const filename = state.file.opts.filename;
        if (!filename.startsWith(pathHelper.join(__dirname, 'src/pages'))) {
          return;
        }

        const newFunction = babel.template.statement(`
          export async function getServerSideProps(){
            return {
              props: {
                apiData: await Page.apiMethod()
              }
            }
          }
        `);
        path.node.body.push(newFunction());
      }
    }
  };
};
