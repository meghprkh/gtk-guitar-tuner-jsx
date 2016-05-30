var Gtk = imports.gi.Gtk;
var Gst = imports.gi.Gst;
const Mainloop = imports.mainloop;

Gtk.init(null, 0);
Gst.init(null, 0);

import { dom, render } from './lib'


var frequencies = {E: 329.63, A: 440,	D: 587.33,	G: 783.99,	B: 987.77,	e: 1318.5}

function playSound(frequency){
  var pipeline = new Gst.Pipeline({name: 'note'});

  var source = Gst.ElementFactory.make('audiotestsrc', 'source');
  var sink = Gst.ElementFactory.make('autoaudiosink', 'output');

  source.set_property('freq', frequency);
  pipeline.add(source);
  pipeline.add(sink);
  source.link(sink);
  pipeline.set_state(Gst.State.PLAYING);

  Mainloop.timeout_add(500, function () {
    pipeline.set_state(Gst.State.NULL);
    return false;
  });
}

var repr = (
  <window title='Guitar Tuner' border_width={100} signals={{destroy: () => Gtk.main_quit()}}>
    <buttonBox spacing={10} orientation={Gtk.Orientation.VERTICAL}>
      <button label='E' signals={{clicked: () => playSound(frequencies.E)}}/>
      <button label='A' signals={{clicked: () => playSound(frequencies.A)}}/>
      <button label='D' signals={{clicked: () => playSound(frequencies.D)}}/>
      <button label='G' signals={{clicked: () => playSound(frequencies.G)}}/>
      <button label='B' signals={{clicked: () => playSound(frequencies.B)}}/>
      <button label='e' signals={{clicked: () => playSound(frequencies.e)}}/>
    </buttonBox>
  </window>
)

var guitarwindow = render(repr)

Gtk.main();
