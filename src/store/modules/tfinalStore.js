export default {
  namespaced: true,
  state: {
    input: {},
    items: [
      {"id":1,"name":"Zathin","color":"Indigo","size":"XS","material":"Ramona Horkelia"},
{"id":2,"name":"Y-find","color":"Yellow","size":"2XL","material":"Sphinctrina Lichen"},
{"id":3,"name":"Cardify","color":"Fuscia","size":"2XL","material":"Canada Lettuce"},
{"id":4,"name":"Hatity","color":"Fuscia","size":"M","material":"Nodding Semaphoregrass"},
{"id":5,"name":"Flexidy","color":"Aquamarine","size":"M","material":"Cup Lichen"},
{"id":6,"name":"Duobam","color":"Puce","size":"L","material":"African-queen"},
{"id":7,"name":"Temp","color":"Blue","size":"XL","material":"Browneyes"},
{"id":8,"name":"Namfix","color":"Maroon","size":"2XL","material":"Entodon Moss"},
{"id":9,"name":"Span","color":"Pink","size":"XL","material":"Moss Campion"},
{"id":10,"name":"Alpha","color":"Puce","size":"XS","material":"Golden Dewdrops"},
{"id":11,"name":"Zontrax","color":"Violet","size":"M","material":"Lilac Tasselflower"},
{"id":12,"name":"Y-find","color":"Aquamarine","size":"XS","material":"Island Jepsonia"},
{"id":13,"name":"Fixflex","color":"Crimson","size":"M","material":"Harebell"},
{"id":14,"name":"Lotlux","color":"Goldenrod","size":"S","material":"Alexandrian Laurel"},
{"id":15,"name":"Cardguard","color":"Teal","size":"S","material":"Wormleaf Stonecrop"},
{"id":16,"name":"Sonair","color":"Fuscia","size":"2XL","material":"Hawai'i Pokeweed"},
{"id":17,"name":"Flexidy","color":"Green","size":"XL","material":"Bonjean's Dicranum Moss"},
{"id":18,"name":"Namfix","color":"Puce","size":"M","material":"Fuscidea Lichen"},
{"id":19,"name":"Bitchip","color":"Goldenrod","size":"L","material":"Seaside Disc Lichen"},
{"id":20,"name":"Fix San","color":"Khaki","size":"M","material":"Dot Lichen"},
{"id":21,"name":"Hatity","color":"Crimson","size":"S","material":"Arizona Signalgrass"},
{"id":22,"name":"Job","color":"Violet","size":"3XL","material":"Comb Bushmint"},
{"id":23,"name":"Konklux","color":"Turquoise","size":"2XL","material":"Revolute Didymodon Moss"},
{"id":24,"name":"Cardguard","color":"Mauv","size":"2XL","material":"Fowler's Knotweed"},
{"id":25,"name":"Tempsoft","color":"Green","size":"2XL","material":"Luquillo Forest Lidflower"},
{"id":26,"name":"Sub-Ex","color":"Violet","size":"L","material":"Shasta Tansyaster"},
{"id":27,"name":"Aerified","color":"Blue","size":"M","material":"Bachman's Jelly Lichen"},
{"id":28,"name":"Duobam","color":"Red","size":"XL","material":"Nested Polypody"},
{"id":29,"name":"Zoolab","color":"Goldenrod","size":"2XL","material":"Neckweed"},
{"id":30,"name":"Cookley","color":"Orange","size":"M","material":"Devil In The Bush"}
],
    entries: 31,

  },
  mutations: {
    DEL_ITEMS(state, id) {      
      state.items = state.items.filter(function(el) {return el.id != id}) 
    },
    UPDATE_ITEMS(state, updateData) {
      console.log("updating", updateData);
    },
    ADD_ITEMS(state, addData) {      
      addData.id = state.entries
      state.items.push(addData)
      state.entries++
    }
  },
  actions: {},
  getters: {}
};
