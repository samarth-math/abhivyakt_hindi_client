import Vue from "vue"
import ArtTile1 from "@/components/ArtTile1"

describe("ArtTile1.vue", () => {
    it("renders artTitle as passed", () => {
      const Constructor = Vue.extend(ArtTile1)
      const vm = new Constructor({
        propsData: {
          artType: "type",
          artTitle: "title",
          artText: "text"
        }
      }).$mount()
      expect(vm.$el.querySelector(".tile .title").textContent).toEqual("title")
    }),
    it("renders artText as passed", () => {
      const Constructor = Vue.extend(ArtTile1)
      const vm = new Constructor({
        propsData: {
          artType: "type",
          artTitle: "title",
          artText: "text"
        }
      }).$mount()
      expect(vm.$el.querySelector(".tile .text").textContent).toEqual("text")
    })
})
