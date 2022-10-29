import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'counter-component',
  styleUrl: 'counter-component.css',
  shadow: true,
})
export class CounterComponent {

  @Prop() btn_increase_text: string;
  @Prop() btn_decrease_text: string;
  @Prop() color: string;

  @State() counter = 0;

  @Event() didReset: EventEmitter;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
    this.didReset.emit(true);
  }

  render() {
    return (
      <Host>
        <div class="principal-container">
          <div class="counter-container">
            <div class={`counter ${this.color}`}>{this.counter}</div>
          </div>

          <div class="buttons-container">
            <button onClick={() => this.decrease()}>{this.btn_decrease_text}</button>
            <button onClick={() => this.increase()}>{this.btn_increase_text}</button>
          </div>

          <div class="reset-container">
            <button onClick={() => this.reset()}>Reset</button>
          </div>

          <div class="help">
            <slot name="help"></slot>
          </div>

        </div>
      </Host>
    );
  }

}
