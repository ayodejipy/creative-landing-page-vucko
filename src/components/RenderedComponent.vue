<script setup lang="ts">
import {h, ref, type VNode, type RendererNode, type RendererElement } from 'vue'

interface TreeData {
    key: string
    title: string
    children?: TreeData[]
}

const data = ref([
	{
		key: 'child-1',
		title: 'Child 1',
		children: [
			{
				key: 'grand-child-1',
				title: 'Grand Child 1'
			}
		]
	},
	{
		key: 'child-2',
		title: 'Child 2',
		children: [
			{
				key: 'grand-child-2',
				title: 'GrandChild 2',
				children: [
					{
						key: 'great-grand-child-2',
						title: 'Great Grand Child 1'
					},
					{
						key: 'great-grand-child-2',
						title: 'Great Grand Child 2'
					}
				]
			}
		]
	}
]);

function TreeComponent() {
    const TreeNode = (nodes: TreeData[]): VNode<RendererNode, RendererElement>[] => {
        return nodes.map((node) => 
            h('li', { key: node.key }, [
                h('span', {key: node.key}, node.title),
				node.children && node.children.length
				? h('ul', { class: 'grand-child' }, TreeNode(node.children))
				: null,
			])
        )
    }

    return h('ul', { class: 'child' }, TreeNode(data.value))
}
</script>

<template>
    <component :is="TreeComponent"></component>
</template>

<style lang="scss">
.container {
    width: 100%;
    padding-inline: size(6);

    @include mq('md') {
        padding-inline: size(8);
    }
}
</style>
