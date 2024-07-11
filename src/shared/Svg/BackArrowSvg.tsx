import {FC} from 'react';
import Svg, {G, Path} from 'react-native-svg';

type Props = {
  height?: string;
  width?: string;
};

const BackArrowSvg: FC<Props> = ({height, width}) => (
  <Svg
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 256 256"
    enableBackground="new 0 0 256 256"
    xmlSpace="preserve">
    <G>
      <G>
        <Path
          fill="#f1f5f9"
          d="M226.8,49.9h-118c-4.1,0-7.8,1.3-11,3.5v-0.1L10,128l87.8,74.8v-0.1c3.1,2.2,6.9,3.5,11,3.5h118c10.6,0,19.1-8.6,19.1-19.1V69C246,58.4,237.4,49.9,226.8,49.9L226.8,49.9z M198.3,150.9c2.1,2.1,2.1,5.5,0,7.6c-2.1,2.1-5.5,2.1-7.6,0l-22.8-22.8l-22.8,22.8c-2.1,2.1-5.5,2.1-7.6,0c-2.1-2.1-2.1-5.5,0-7.6l22.8-22.8l-22.8-22.8c-2.1-2.1-2.1-5.5,0-7.6c2.1-2.1,5.5-2.1,7.6,0l22.8,22.8l22.8-22.8c2.1-2.1,5.5-2.1,7.6,0c2.1,2.1,2.1,5.5,0,7.6l-22.8,22.8L198.3,150.9z"
        />
      </G>
    </G>
  </Svg>
);
export default BackArrowSvg;
