import UpdateIcon from '@mui/icons-material/Update'
import HistoryIcon from '@mui/icons-material/History'
import TempleHinduIcon from '@mui/icons-material/TempleHindu'
import PersonIcon from '@mui/icons-material/Person'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel'

const adminCategories = [
    {
        id: 'Puja',
        children: [
            {
                id: 'Upcoming Pujas',
                icon: <UpdateIcon />,
                to: '/dashboard',
                selected: '/dashboard'
            },
            {
                id: 'Past Pujas',
                icon: <HistoryIcon />,
                to: '/dashboard/past-pujas',
                selected: '/dashboard/past-pujas'
            },
        ],
    },
    {
        id: 'Temple',
        children: [
            {
                id: 'All Temples',
                icon: <TempleHinduIcon />,
                to: '/dashboard/temples',
                selected: '/dashboard/temples'
            }
        ]
    },
    {
        id: 'God',
        children: [
            {
                id: 'All Gods',
                icon: <TempleHinduIcon />,
                to: '/dashboard/gods',
                selected: '/dashboard/gods'
            },
        ],
    },
    {
        id: 'Lead Conversion',
        children: [
            {
                id: 'All Leads',
                icon: <PersonIcon />,
                to: '/dashboard/leads',
                selected: '/dashboard/leads'
            }
        ]
    },
    {
        id: 'Carousel',
        children: [
            {
                id: 'All Items',
                icon: <ViewCarouselIcon />,
                to: '/dashboard/carousel',
                selected: '/dashboard/carousel'
            }
        ]
    },
    {
        id: 'Blog',
        children: [
            {
                id: 'All Blogs',
                icon: <ViewCarouselIcon />,
                to: '/dashboard/blogs',
                selected: '/dashboard/blogs'
            }
        ]
    },
    {
        id: 'Admin User',
        children: [
            {
                id: 'All Users',
                icon: <PersonIcon />,
                to: '/dashboard/users',
                selected: '/dashboard/users'
            }
        ]
    }
]

const userCategories = [
    {
        id: 'Puja',
        children: [
            {
                id: 'Upcoming Pujas',
                icon: <UpdateIcon />,
                to: '/dashboard',
                selected: '/dashboard'
            },
            {
                id: 'Past Pujas',
                icon: <HistoryIcon />,
                to: '/dashboard/past-pujas',
                selected: '/dashboard/past-pujas'
            },
        ],
    },
    {
        id: 'God',
        children: [
            {
                id: 'All Gods',
                icon: <TempleHinduIcon />,
                to: '/dashboard/gods',
                selected: '/dashboard/gods'
            },
        ],
    },
]

export { adminCategories, userCategories }