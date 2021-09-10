import { getGoodsList, getDealers } from "../../api";

export default {
  state: {
    error: null,
    goods: [],
    selectedGoods: [],
    dealers: null
  },
  reducers: {
    setError: (state, payload) => ({ ...state, error: payload }),
    clearError: (state) => ({ ...state, error: null }),
    setGoods: (state, payload) => ({ ...state, goods: payload }),
    clearSelectedGoods: (state) => ({ ...state, selectedGoods: [] }),
    changeSelectedGoods: (state, payload) => ({ ...state, selectedGoods: payload }),
    setDealers: (state, payload) => ({ ...state, dealers: payload })
  },
  effects: (dispatch) => ({
    init() {
      const savedSelectedGoods = localStorage.getItem("cart");
      const parsedData = JSON.parse(savedSelectedGoods);
      
      if (parsedData) {
        dispatch.main.changeSelectedGoods(parsedData)
      }
    },
    async getDealers(payload) {
      if (payload) {
        dispatch.main.setDealers(payload);
        dispatch.main.getGoods({ dealers: payload });
        return
      }
      
      try {
        const response = await getDealers();
        dispatch.main.setDealers(response.data);
        dispatch.main.getGoods({ dealers: response.data });
      } catch (e) {
        dispatch.main.setError(e)
      }
    },
    async getGoods(payload) {
      const { dealers } = payload;
      
      try {
        const response = await getGoodsList(dealers.join(","));
        dispatch.main.setGoods(response.data);
      } catch (e) {
        dispatch.main.setError(e)
      }
    },
    addGoods(payload, rootState) {
      const { selectedGoods } = rootState.main;
    
      const newGoods = [ ...selectedGoods, payload ];
    
      dispatch.main.changeSelectedGoods(newGoods);
      localStorage.setItem("cart", JSON.stringify(newGoods));
    },
    changeCountGoods(payload, rootState) {
      const { id, count } = payload;
      const { selectedGoods } = rootState.main;
      
      const newGoods = selectedGoods.map(el => {
        if (el.id !== id) return el;
        return {
          ...el,
          count: count
        }
      })
      
      dispatch.main.changeSelectedGoods(newGoods)
      localStorage.setItem("cart", JSON.stringify(newGoods));
    },
    deleteGoods(payload, rootState) {
      const { id } = payload;
      const { selectedGoods } = rootState.main;
    
      const newGoods = selectedGoods.filter(el => el.id !== id)
    
      dispatch.main.changeSelectedGoods(newGoods)
      localStorage.setItem("cart", JSON.stringify(newGoods));
    }
  }),
};
