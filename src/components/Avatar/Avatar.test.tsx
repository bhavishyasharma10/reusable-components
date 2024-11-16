import { render, screen, fireEvent } from '@testing-library/react';
import Avatar from './Avatar';
import './Avatar.scss';

describe('Avatar', () => {
  it('renders an avatar with image', () => {
    render(<Avatar src="https://example.com/avatar.jpg" />);
    const avatarImage = screen.getByAltText('Icon');
    expect(avatarImage).toBeInTheDocument();
  });

  it('renders an avatar with initials', () => {
    render(<Avatar initials="JD" textFontSize={12} />);
    const avatarInitials = screen.getByText('JD');
    expect(avatarInitials).toBeInTheDocument();
  });

  it('renders an avatar with children', () => {
    render(
      <Avatar>
        <div>Custom Content</div>
      </Avatar>
    );
    const customContent = screen.getByText('Custom Content');
    expect(customContent).toBeInTheDocument();
  });

  it('renders an avatar with initials when the image source is invalid', () => {
    render(
      <Avatar
        src="invalid"
        initials="JD"
        dataAttributes={{
          id: 'invalid',
        }}
      />
    );

    const imageRef = screen.getByAltText('Icon');
    fireEvent.error(imageRef);
    const avatarInitials = screen.getByText('JD');
    expect(avatarInitials).toBeInTheDocument();
  });

  it('renders an avatar with icon and initials', () => {
    render(
      <Avatar
        initials="JD"
        icon="https://example.com/avatar.svg"
        dataAttributes={{
          id: 'icon-initials',
        }}
      />
    );

    const avatarInitials = screen.getByText('JD');
    expect(avatarInitials).toBeInTheDocument();
  });
});
