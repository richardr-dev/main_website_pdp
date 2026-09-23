import { Icon } from './Icon'
export function ServiceList({items}:{items:readonly string[]|string[]}){return <div className="list-grid">{items.map(x=><div className="list-item" key={x}><Icon name="check"/><span>{x}</span></div>)}</div>}
