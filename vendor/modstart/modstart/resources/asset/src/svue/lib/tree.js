const Tree = {
    /**
     * 过滤出所有祖先节点树链路
     * @param tree
     * @param value
     * @param valueKey
     * @param childKey
     * @returns {null}
     */
    filterAncestors: function (tree, value, valueKey, childKey) {
        valueKey = valueKey || 'id'
        childKey = childKey || '_child'
        let result = null;
        tree.forEach(o => {
            let children
            if (o[valueKey] === value) {
                result = o
                return result
            }
            if (o[childKey] && (children = Tree.filterAncestors(o[childKey], value, valueKey, childKey))) {
                let oo = {}
                oo[childKey] = children
                result = Object.assign({}, o, oo)
                return result
            }
        })
        return result;
    },
    /**
     * 根据ID查找所有祖先节点
     * @param tree
     * @param value
     * @param valueKey
     * @param childKey
     * @returns {*[]}
     */
    listAncestors: function (tree, value, valueKey, childKey) {
        valueKey = valueKey || 'id'
        childKey = childKey || '_child'
        let parents = Tree.filterAncestors(tree, value, valueKey, childKey)
        if (null === parents) {
            return []
        }
        let node = parents, list = []
        do {
            let o = Object.assign({}, node)
            delete o[childKey]
            list.push(o)
            node = node[childKey]
        } while (node)
        return list
    },
    /**
     * 查找所有子节点ID（包括自己）
     * @param nodes
     * @param id
     * @param idKey
     * @param pidKey
     * @returns {*[]}
     */
    findChildrenIdsIncludeSelf: function (nodes, id, idKey, pidKey) {
        return [id].concat(Tree.findChildren(nodes, id, idKey, pidKey).map(o => o[idKey]))
    },
    /**
     * 查找所有子节点ID
     * @param nodes
     * @param id
     * @param idKey
     * @param pidKey
     * @returns {*[]}
     */
    findChildrenIds: function (nodes, id, idKey, pidKey) {
        return Tree.findChildren(nodes, id, idKey, pidKey).map(o => o[idKey])
    },
    /**
     * 查找所有子节点
     * @param nodes
     * @param id
     * @param idKey
     * @param pidKey
     * @returns {*[]}
     */
    findChildren: function (nodes, id, idKey, pidKey) {
        let children = []
        for (let node of nodes) {
            if (node[pidKey] === id) {
                children.push(node)
                children = children.concat(Tree.findChildren(nodes, node[idKey], idKey, pidKey))
            }
        }
        return children
    },
    /**
     * 找到所有祖先
     * @param nodes
     * @param id
     * @param idKey
     * @param pidKey
     * @returns {*[]}
     */
    findAncestors: function (nodes, id, idKey, pidKey) {
        let ancestors = []
        for (let node of nodes) {
            if (node[idKey] === id) {
                ancestors.push(node)
                if (node[pidKey] !== 0) {
                    ancestors = ancestors.concat(Tree.findAncestors(nodes, node[pidKey], idKey, pidKey))
                }
                break
            }
        }
        return ancestors.reverse()
    },
    /**
     * nodes sort
     * @param nodes
     * @param id
     * @param idKey
     * @param pidKey
     * @param sortKey
     * @returns {*[]}
     */
    sort: function (nodes, id, idKey, pidKey, sortKey) {
        id = id || ''
        idKey = idKey || 'id'
        pidKey = pidKey || 'pid'
        sortKey = sortKey || 'sort'
        nodes.forEach(o => {
            if (!o[idKey]) {
                o[idKey] = ''
            }
            if (!o[pidKey]) {
                o[pidKey] = ''
            }
        })
        nodes = nodes.sort((a, b) => {
            return a[sortKey] - b[sortKey]
        })

        return Tree._sort(nodes, id, idKey, pidKey, sortKey)
    },
    _sort: function (list, id, idKey, pidKey, sortKey, level, ids) {
        level = level || 1
        ids = ids || {}
        let result = []
        // console.log('>> '.repeat(level), 'Tree._sort find.l', level, id, list.length)
        // console.log('>> '.repeat(level), 'Tree._sort find  ', level, id, JSON.stringify(list.filter(o => o[pidKey] === id)))
        list.filter(o => o[pidKey] === id).forEach(o => {
            // console.log('>> '.repeat(level), 'push', level, JSON.stringify(o))
            if (o[idKey] in ids) {
                throw "duplicate sort tree : " + JSON.stringify(o) + " " + JSON.stringify(ids)
            }
            ids[o[idKey]] = true
            result.push(Object.assign(o, {level: level}))
            let ret = Tree._sort(list, o[idKey], idKey, pidKey, sortKey, level + 1, ids)
            ret.forEach(oo => {
                result.push(Object.assign(oo))
            })
        })
        // console.log('>> '.repeat(level), 'Tree._sort result', level, id, JSON.stringify(result))
        return result
    },
    /**
     * nodes -> tree
     *
     * @param nodes
     * @param id
     * @param idKey
     * @param pidKey
     * @param sortKey
     * @param childrenKey
     * @returns {*|Array}
     */
    tree: function (nodes, id, idKey, pidKey, sortKey, childrenKey) {
        id = id || ''
        idKey = idKey || 'id'
        pidKey = pidKey || 'pid'
        sortKey = sortKey || 'sort'
        childrenKey = childrenKey || '_child'
        nodes.map(o => {
            if (!o[idKey]) {
                o[idKey] = ''
            }
            if (!o[pidKey]) {
                o[pidKey] = ''
            }
        })
        nodes = nodes.sort((a, b) => {
            return a[sortKey] - b[sortKey]
        })
        return Tree._tree(nodes, id, idKey, pidKey, sortKey, childrenKey)
    },
    _tree: function (nodes, id, idKey, pidKey, sortKey, childrenKey, level, ids) {
        level = level || 1
        ids = ids || {}
        let result = []
        nodes.filter(o => o[pidKey] === id).forEach(o => {
            if (o[idKey] in ids) {
                throw "duplicate sort tree : " + JSON.stringify(o) + " " + JSON.stringify(ids)
            }
            ids[o[idKey]] = true
            let addition = {level: level}
            addition[childrenKey] = Tree._tree(nodes, o[idKey], idKey, pidKey, sortKey, childrenKey, level + 1, ids)
            if (!addition[childrenKey].length) {
                delete addition[childrenKey]
            }
            result.push(Object.assign(o, addition))
        })
        return result
    },
    /**
     * tree -> nodes
     *
     * @param tree
     * @param idKey
     * @param pidKey
     * @param sortKey
     * @param childrenKey
     * @returns {*|Array}
     */
    nodes: function (tree, idKey, pidKey, sortKey, childrenKey) {
        idKey = idKey || 'id'
        pidKey = pidKey || 'pid'
        sortKey = sortKey || 'sort'
        childrenKey = childrenKey || '_child'
        return Tree._nodes(JSON.parse(JSON.stringify(tree)), 0, idKey, pidKey, sortKey, childrenKey)
    },
    _nodes: function (tree, id, idKey, pidKey, sortKey, childrenKey, level) {
        level = level || 1
        let result = []
        tree.forEach(o => {
            let node = o
            node[pidKey] = id
            node.level = level
            if (childrenKey in node && typeof node[childrenKey] === 'object') {
                let children = node[childrenKey]
                delete node[childrenKey]
                result.push(node)
                Tree._nodes(children, node[idKey], idKey, pidKey, sortKey, childrenKey, level + 1).forEach(oo => {
                    result.push(oo)
                })
            } else {
                delete node[childrenKey]
                result.push(node)
            }
        })
        return result;
    },
    resortAndDiff: function (listNew, listOld, idKey, pidKey, sortKey) {
        idKey = idKey || 'id'
        pidKey = pidKey || 'pid'
        sortKey = sortKey || 'sort'
        let oldMap = {}
        listOld.forEach(o => oldMap[o[idKey]] = o)
        let sort = 1
        listNew.forEach(o => o[sortKey] = sort++)
        let diffList = []
        listNew.forEach(o => {
            if (o[idKey] in oldMap) {
                const old = oldMap[o[idKey]]
                if (old[pidKey] === o[pidKey] && old[sortKey] === o[sortKey]) {
                } else {
                    diffList.push(o)
                }
            } else {
                diffList.push(o)
            }
        })
        return diffList
    }
}

export {
    Tree
}
