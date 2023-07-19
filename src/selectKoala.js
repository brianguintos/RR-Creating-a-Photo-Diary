import render from './index'
// Changes the active koala, then re-renders the page to display that koala
export let activeKoala = null

export let selectKoala = koala => {
    activeKoala = koala
    render()
}