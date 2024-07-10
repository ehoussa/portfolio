import { useBreakpointValue } from '@chakra-ui/react';
import MdNavBar from './MdNavBar';
import BaseNavBar from './BaseNavBar';

const NavBar = () => {
    const showMenu = useBreakpointValue({base: false, md: true});

  return (
    <>
        {showMenu ?
        <MdNavBar /> :
        <BaseNavBar />
        }
    </>
  )
}

export default NavBar    