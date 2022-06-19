import TaskTable from './task-table';

export default {
  component: TaskTable,
  title: 'TaskTable',
};

const tasks = [
  {
    id: 1,
    name: 'Triangle field',
    description: 'Write program which calculates triangle area',
    date: '2022-06-19',
    assignee: 'Tom',
  },
  {
    id: 2,
    name: 'Johny and Gretel',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '2022-06-19',
    assignee: 'Ann',
  },
];

const Template = (args) => <TaskTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tasks: tasks,
};
