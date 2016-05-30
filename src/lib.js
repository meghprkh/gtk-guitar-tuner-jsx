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
  switch (vdom.element) {
    case window:
      el = new Gtk.Window(vdom.attributes)
      if (vdom.children) vdom.children.map(child => el.add(render(child, el)))
      el.show()
      break
    case buttonBox:
      el = new Gtk.ButtonBox(vdom.attributes)
      if (vdom.children) vdom.children.map(child => el.add(render(child, el)))
      el.show_all()
      break
    case button:
      el = new Gtk.Button(vdom.attributes);
      break
  }
  if (vdom.signals) Object.keys(vdom.signals).map(signal => el.connect(signal, vdom.signals[signal]))
  return el;
}
