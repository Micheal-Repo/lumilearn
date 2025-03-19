import { create } from 'zustand'

interface useMobileSearchType{
  isSearch:boolean,
  setIsSearch:(val:boolean)=> void
}


export const useMobileSearch = create<useMobileSearchType>((set) => ({
  isSearch: false,
  setIsSearch: (val) => set((state) => ({isSearch:val})),
}))