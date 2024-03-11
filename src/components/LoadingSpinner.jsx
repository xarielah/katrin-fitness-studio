import Image from 'next/image';
import { forwardRef } from 'react';
import spinnerVector from '../../public/Assets/spinner.svg';
import { cn } from '../../utils/cn';

/**
 * Loading spinner component, used to indicate loading state.
 * using forwaredRef to allow parent component to access the ref of the spinner
 * in case it needs to manipulate it.
 * 
 * @param {object} props - component props
 * @param {object} ref - component ref
 * 
 * @returns {React.FC} - loading spinner component
 */
export default forwardRef(function LoadingSpinner(props, ref) {
    const { className, ...rest } = props;
    return <Image alt='אנא המתינו' {...rest} ref={ref} className={cn("animate-spin", className)} src={spinnerVector.src} width={18} height={18}/>
})