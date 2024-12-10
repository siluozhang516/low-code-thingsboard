export function mergeProps(target: any, resource: any) {
    for (const i in target) {
        if (['width', 'height', 'x', 'y'].includes(i)) {
            const rect:any = meta2d.getPenRect(resource)
            target[i] = rect[i]
            continue
        }
        if (resource[i]) {
            target[i] = resource[i]
        } else {
            target[i] = resource.calculative?.[i]
        }
        if (!target[i]) {
            switch (typeof target[i]) {
                case "string":
                    target[i] = ""
                    break
                case "number":
                    target[i] = 0
                    break
                case "boolean":
                    target[i] = false
                    break
            }
        }
    }
}
