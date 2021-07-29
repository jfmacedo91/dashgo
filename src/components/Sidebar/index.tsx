import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue
} from "@chakra-ui/react"

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"

import { SidebarNav } from "./SidebarNav"

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if(isDrawerSidebar) {
    return (
      <Drawer isOpen={ isOpen } placement="left" onClose={ onClose }>
        <DrawerOverlay>
          <DrawerContent backgroundColor="gray.800">
            <DrawerCloseButton
              marginTop="6px"
              _focus={ {
                outlineColor: "green.500",
                outlineWidth: "1px"
              } }
            />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" width="64" marginRight="8">
      <SidebarNav />
    </Box>
  )
}