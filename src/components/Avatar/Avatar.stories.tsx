/* eslint-disable @typescript-eslint/naming-convention */
import type { StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const AvatarWithTextIconBg = '#F8FCFF';
const AvatarWithTextIconShadow = '#337AB71A';
const AvatarWithTextIconBorder = '#AED1F2';
const AvatarWithTextIconColor = '#337AB7';

const defaultAvatarWithTextIconStyles: React.CSSProperties = {
  width: '54px',
  height: '35px',
  background: `${AvatarWithTextIconBg} 0% 0% no-repeat padding-box`,
  boxShadow: `0px 3px 8px ${AvatarWithTextIconShadow}`,
  border: `1px solid ${AvatarWithTextIconBorder}`,
  borderRadius: '24px',
  fontFamily: 'SFUIText-Bold',
  color: AvatarWithTextIconColor,
};

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    className: { control: 'text' },
    children: { control: 'text' },
    icon: { control: 'text' },
    initials: { control: 'text' },
    variant: {
      options: ['circle', 'square', 'rounded', 'rounded-circle', 'rounded-circle-text-icon'],
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const DEFAULT_ARGS = {
  dataAttributes: { id: 'avatar' },
  initials: 'FP',
  textFontSize: 15,
  style: {
    color: '#F49B50',
    backgroundColor: '#FFFBF8',
    width: '35px',
    height: '35px',
  },
};

export const Default: Story = {
  args: {
    ...DEFAULT_ARGS,
    variant: 'circle',
  },
};

export const Square: Story = {
  args: {
    ...DEFAULT_ARGS,
    variant: 'square',
  },
};

export const Image: Story = {
  args: {
    src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg',
  },
};

export const InitialsWithIcon: Story = {
  args: {
    icon: 'src/assets/svg/avatar_arrow_down.svg',
    initials: 'CK',
    variant: 'rounded-circle-text-icon',
    textFontSize: 15,
    iconClassName: 'avatar--icon',
    style: {
      ...defaultAvatarWithTextIconStyles,
    },
  },
};
