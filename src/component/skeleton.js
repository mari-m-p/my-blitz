import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import b from '../styles/grid-view.module.css';

const SkeletonRect = () => {
    return <Stack spacing={1} className={b.stack}>
        <Skeleton variant="rectangular" className={b.skeleton} />
        <Skeleton variant="rectangular" className={b.skeleton} />
        <Skeleton variant="rectangular" className={b.skeleton} />
        <Skeleton variant="rectangular" className={b.skeleton} />
    </Stack>
}

export default SkeletonRect;