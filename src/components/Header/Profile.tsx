import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems="center">
      { showProfileData && (
        <Box margin="4" textAlign="right">
          <Text>
            Jean Fernandes de Macedo
          </Text>
          <Text fontSize="small" color="gray.300">
            jfmacedo91@gmail.com
          </Text>
        </Box>
      ) }
      <Avatar
        size="md"
        backgroundColor="green.500"
        name="Jean Fernandes de Macedo"
        src="https://github.com/JFMacedo.png"
      />
    </Flex>
  )
}