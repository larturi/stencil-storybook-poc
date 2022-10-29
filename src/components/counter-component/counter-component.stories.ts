export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Components/CounterComponent',
};

const Template = (args) => `
    <counter-component
      btn_increase_text="${args.btn_increase_text}"
      btn_decrease_text="${args.btn_decrease_text}"
      color="${args.color}"
    >
      <div slot="help">Lorem ipsum dolor sit amet.</div>
    </counter-component>
`;

export const Example = Template.bind({});
Example.args = {
    btn_increase_text: '+',
    btn_decrease_text: '-',
    color: 'dark'
};
