import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

const getMobileOS = () => {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
        return 'Android';
    }
    if (/iPad|iPhone|iPod/.test(ua)) {
        return 'iOS';
    }
    return 'Other';
};

function Index() {
    const currentOS = getMobileOS();
    if (currentOS !== 'Other') {
        return (
            <div>
                <div>On Mobile!</div>
                <a href='c2mobileapp://'>Open mobile app!</a>
            </div>
        );
    }

    return (
        <div className='p-2'>
            <h3>Welcome Home!</h3>
        </div>
    );
}
