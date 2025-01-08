import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

const getMobileOS = () => {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
        return 'Android';
    } else if (/iPad|iPhone|iPod/.test(ua)) {
        return 'iOS';
    }
    return 'Other';
};

alert(getMobileOS());

function Index() {
    return (
        <div className='p-2'>
            <h3>Welcome Home!</h3>
        </div>
    );
}
