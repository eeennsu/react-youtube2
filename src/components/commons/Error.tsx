import type { FC } from 'react';

type Props = {
    error: Error;
}

const Error: FC<Props> = ({ error }) => {

    return (
        <div>
           Erorr - {error.message}
        </div>
    );
};

export default Error;