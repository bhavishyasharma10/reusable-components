import React, { useEffect, useState } from 'react';
import './Avatar.scss';

type AvatarVariants =
  | 'circle'
  | 'square'
  | 'rounded'
  | 'rounded-circle'
  | 'rounded-circle-text-icon';

interface AvatarProps {
  /** Id of the avatar. */
  id?: string;
  /** The Avatar's image source.  */
  src?: string;
  /** Specify an optional className to be added to your Avatar. */
  className?: string;
  /** The initials are displayed when there is no image (including while the image is loading). */
  initials?: string;
  /** Initials font size. */
  textFontSize?: number;
  /** Specify the content of your Avatar. */
  children?: React.ReactNode;
  /** The avatar can have a circular, square, rounded or rounded-circle variants */
  variant?: AvatarVariants;
  /** Specify styles to be added to your Avatar like width, height and background */
  style?: React.CSSProperties;
  /** Icon to be displayed in the avatar along with initials. */
  icon?: string;
  /** Specify an optional className to be added to the icon. */
  iconClassName?: string;
  /** Icon width. */
  iconWidth?: string;
  /** Icon height. */
  iconHeight?: string;
  /** Provide an optional function to be called when the avatar element is clicked. */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface TextProps {
  textFontSize: number;
  letters: string;
  textIcon: string;
  iconClassName: string;
  iconWidth: string;
  iconHeight: string;
}

/**
 * Renders text in a span element or avatar with icon.
 */
const renderText = (textProps: TextProps): JSX.Element | null => {
  const {
    textFontSize,
    letters,
    textIcon,
    iconClassName,
    iconWidth: width,
    iconHeight: height,
  } = textProps;

  if (!letters) {
    return null;
  }

  return (
    <>
      <span style={{ fontSize: textFontSize, textTransform: 'uppercase' }}>{letters}</span>
    </>
  );
};

/**
 * Avatar is a graphical representation of a user or entity. It’s often a photo, illustration, or text initial.
 */
const Avatar: React.FC<AvatarProps> = ({ ...props }: AvatarProps) => {
  const {
    id,
    src,
    className,
    initials = '',
    children,
    style,
    variant,
    icon,
    textFontSize = 12,
    iconClassName = 'avatar--icon',
    iconHeight = '9px',
    iconWidth = '9px',
    onClick,
  } = props;

  const textIcon = icon ?? '';
  const letters = initials.trim().slice(0, 2);
  const [imgLoadError, setImgLoadError] = useState(false);
  const textProps = {
    textFontSize,
    letters,
    textIcon,
    iconClassName,
    iconWidth,
    iconHeight,
  };

  useEffect(() => {
    /** Reset error state when url changes */
    setImgLoadError(false);
  }, [src]);

  const shouldRenderImage = !!src && !imgLoadError;

  return (
    <button
      type="button"
      className={['avatar', `avatar--${variant}`, className].join(' ')}
      id={id}
      style={{
        ...style,
      }}
      onClick={(e) => onClick && onClick(e)}
      tabIndex={0}
    >
      {shouldRenderImage ? (
        <img
          src={src}
          onError={() => setImgLoadError(true)}
          alt="Icon"
          className="avatar--image"
          aria-hidden
        />
      ) : (
        renderText(textProps) || children
      )}
    </button>
  );
};

/** Default props. */
Avatar.defaultProps = {
  variant: 'circle',
  textFontSize: 12,
  id: 'avatar-circle',
  iconHeight: '9px',
  iconWidth: '9px',
  style: {
    width: '29px',
    height: '29px',
  },
} as Partial<AvatarProps>;

Avatar.displayName = 'Avatar';

export default Avatar;
