const Node = require('./Node')
const Queue = require('./Queue')

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(data) {
		if(!this.root) {
			this.root = new Node(data)
		} else {
			let currentNode = this.root

			while(true) {
				if(data <= currentNode.data) {
					if(currentNode.left) {
						currentNode = currentNode.left
					} else {
						currentNode.left = new Node(data)
						break
					}
				} else {
					if(currentNode.right) {
						currentNode = currentNode.right
					} else {
						currentNode.right = new Node(data)
						break
					}
				}
			}
		}
	}

	dfs(cb, node=this.root) {
		if (!node) return
		cb(node.data)
		this.dfs(cb, node.left)
		this.dfs(cb, node.right)
	}

	bfs(cb, node=this.root) {
		var q = []
		q.push(node)
		while (q.length > 0) {
			var current = q.shift()
			cb(current.data)
			if (current.left) q.push(current.left)
			if (current.right) q.push(current.right)
		}
	}
}

module.exports = BinarySearchTree
