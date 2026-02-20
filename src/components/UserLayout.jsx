import { Outlet } from 'react-router-dom'
import UserAsideBar from './UserAsideBar'
import Container from './Container'

const UserLayout = () => {
    return (
        <>
            <Container>
                <div className="w-full grid grid-cols-12 h-full gap-4">
                    <div
                        className="w-full col-span-12 lg:col-span-3 h-full"
                    >
                        <UserAsideBar />
                    </div>

                    <div className="w-full lg:pb-0 pb-5 h-full col-span-12 lg:col-span-9">
                        <Outlet />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UserLayout
