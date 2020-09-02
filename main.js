var collapsibleComponent = Vue.component('collapsibleCategory', {
    props: ['name', 'items'],
    methods: {
        toggleCollapse(e) {
            var collapsibleContent = e.target.nextElementSibling;
            if (collapsibleContent.style.maxHeight) {
                collapsibleContent.style.maxHeight = null;
            } else {
                collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight * 2 + 'px';
            }
        }
    },
    template: `<div>
				<button class="collapsible" v-on:click.self='toggleCollapse($event)'>{{ name }}</button>
				<div class="content">
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
				</div>
			</div>`
})

var app = new Vue({
    el: '#app',
    data: {
        categories: [{
                id: 1,
                name: 'Fresh Produce'
            },
            {
                id: 2,
                name: 'Baked Goods'
            },
            {
                id: 3,
                name: 'Animal Products'
            },
        ]
	},
    components: {
        'collapsibleCategory': collapsibleComponent
    },
    methods: {
        toggleCollapse(e) {
            var collapsibleContent = e.target.nextElementSibling;
            if (collapsibleContent.style.maxHeight) {
                collapsibleContent.style.maxHeight = null;
            } else {
                collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight * 2 + 'px';
            }
        }
    }
})