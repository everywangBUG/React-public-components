import { Watermark, WatermarkProps } from './Watermark/Watermark';
import { MessageProps, Position, MessageRef} from './Message/MessageProvider';
import { useMessage } from './Message/useMessage';
import { ConfigProvider } from './Message/ConfigProvider';

export {
    Watermark,
    ConfigProvider,
    useMessage
}

export type {
    WatermarkProps,
    MessageProps,
    Position,
    MessageRef
}
