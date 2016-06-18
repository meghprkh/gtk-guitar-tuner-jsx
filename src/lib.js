var Gtk = imports.gi.Gtk;
var objectOmit = require('object.omit')

const window = 'window'
const button = 'button'
const buttonBox = 'buttonBox'

export function dom (element, attributes, ...children) {
  return {
    element,
    attributes: objectOmit(attributes, 'signals'),
    children,
    signals: attributes.signals
  }
}

export function render (vdom) {
  var el;
  const elname = vdom.element[0].toUpperCase() + vdom.element.substring(1);
  el = new Gtk[elname]()
  Object.keys(vdom.attributes).map(key => el[key] = vdom.attributes[key])
  if (vdom.children) vdom.children.map(child => el.add(render(child, el)))
  if (vdom.signals) Object.keys(vdom.signals).map(signal => {
    try {
      el.connect(signal, vdom.signals[signal])
    } catch (err) {
      print(err)
    }
  })
  el.show_all()
  return el;
}
