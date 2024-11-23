import { StoryObj } from "@storybook/react";
import { TimelineSteps } from "./TimelineSteps";

const meta = {
  title: 'Components/Timeline',
  component: TimelineSteps,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
}

export default meta;  
type Story = StoryObj<typeof meta>;

const DEFAULT_ARGS = {
  items: [
    {
      children: 'Create a services site 2015-09-01',
    },
    {
      children: 'Solve initial network problems 2015-09-01',
    },
    {
      children: 'Technical testing 2015-09-01',
    },
    {
      children: 'Network problems being solved 2015-09-01',
    },
  ],
};

const primary = {
  items:[
    {
      color: 'green',
      children: 'Create a services site 2015-09-01',
    },
    {
      color: 'green',
      children: 'Create a services site 2015-09-01',
    },
    {
      color: 'red',
      children: (
        <>
          <p>Solve initial network problems 1</p>
          <p>Solve initial network problems 2</p>
          <p>Solve initial network problems 3 2015-09-01</p>
        </>
      ),
    },
    {
      children: (
        <>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </>
      ),
    },
    {
      color: 'gray',
      children: (
        <>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </>
      ),
    },
    {
      color: 'gray',
      children: (
        <>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </>
      ),
    },
    {
      color: '#00CCFF',
      children: <p>Custom color testing</p>,
    },
  ]
}

export const Default: Story = {
  args: {
    ...DEFAULT_ARGS,
  },
};

export const Primary: Story = {
  args: {
    ...primary,
  },
};