export class Component {
	#component = null;

	constructor(tag, parent, options) {
		this.tag = tag;
		this.parent = parent;
		this.options = options;
		this.build();
	}

	getComponent() {
		return this.#component;
	}

	build() {
		this.#component = document.createElement(this.tag);
		Object.assign(this.#component, this.options);
		return this;
	}

	render() {
		if (this.parent instanceof Component) {
			this.parent.getComponent().append(this.#component);
		} else {
			document.querySelector(this.parent).append(this.#component);
		}
	}
}
