let h1 = document.querySelector('h1')! // ! confirms that we know the element is there
let v = h1.innerText
//querying by class
let form = document.querySelector('.some-class')
//querying by id
let form2 = document.querySelector('#some-id') as HTMLFormElement //type casting = telling TS what the type is
let u = form2.children

//run some code in response to the 'submit' event
form2.addEventListener('submit', (e: Event) => {
    e.preventDefault() //default action for form submit = page refresh
})

// * * * * * * * * * * * * * * * * * * * * * * * * * * * //

// ---- final code after video #6 ---- //

class GroceryItem {
    constructor(
        public name: string,
        public quantity: number,
    ) { }

    format() {
        return `(${this.quantity})`
    }
}

class ListTemplate {
    constructor(private container: HTMLUListElement) { }

    render(item: GroceryItem) {
        let li = document.createElement('li')
        let p1 = document.createElement('p')
        p1.innerText = item.name
        li.append(p1)
        let p2 = document.createElement('p')
        p2.innerText = item.format()
        li.append(p2)

        this.container.append(li);
    }
}

let f = document.querySelector('#new-item-form') as HTMLFormElement //type casting
let ul = document.querySelector('ul')!
let list = new ListTemplate(ul)
let n = document.querySelector('#new-item-name') as HTMLInputElement
let q = document.querySelector('#new-item-quantity') as HTMLInputElement

f.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    let itemTemp: GroceryItem = new GroceryItem(n.value, q.valueAsNumber)
    list.render(itemTemp)
})