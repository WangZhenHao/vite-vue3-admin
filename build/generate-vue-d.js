import { build } from "vue-dts-gen/dist/index.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

function resolve(src) {
    return path.join(__dirname, src);
}

// build('../src/components/page-table/index.vue', '../src/components/page-table');
// console.log(resolve('../src/components/page-table/index.vue'));
// console.log(build);
build("/src/components", "/src/components");
