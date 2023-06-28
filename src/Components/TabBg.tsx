import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps & {
  color?: string;
};

export const TabBg: React.FC<Props> = ({color = '#FFFFFF', ...props}) => {
  return (
    <Svg width={75} height={100} viewBox="0 30 75 100" {...props}>
      <Path
        d="M 75.2 30 v 61 H 0 V 30 c 4.1 0 7.4 3.1 7.9 7.1 C 10 51.7 22.5 63 37.7 63 c 15.2 0 27.7 -11.3 29.7 -25.9 c 0.5 -4 3.9 -7.1 7.9 -7.1 h -0.1 z"
        fill={color}
      />
    </Svg>
  );
};
