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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div>On Mobile!</div>
                <a href='c2mobileapp://?openDocument=true&class=C2Ticket&id=B723B007C515C337E496827A82D12A34'>
                    Open mobile app!
                </a>
                <a href='itms-apps://itunes.apple.com/us/app/c2crm/id605389749'>Download iOS</a>
                <a href='https://play.google.com/store/apps/details?id=com.clearc2.C2CRM'>Download Android</a>
                <input type='date' />
                <input type='time' />
            </div>
        );
    }

    return (
        <div className='p-2'>
            <h3>Welcome Home!</h3>
        </div>
    );
}
