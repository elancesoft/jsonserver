const items = require("./data/items");
const tags = require("./data/tags");
const brands = require("./data/brands");
const itemTypes = require("./data/itemTypes");
const categories = require("./data/categories");
const lookbooks = require("./data/lookbooks");

module.exports = {
  items,
  tags,
  brands,
  itemTypes,
  categories,
  lookbooks
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
