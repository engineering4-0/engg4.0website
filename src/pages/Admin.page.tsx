import React, { useState, ChangeEvent } from 'react'
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Button,
  CardHeader,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Input,
  Textarea,
  Select,
  SelectItem,
  Image,
  CardFooter,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPen,
  FaPlus
} from 'react-icons/fa'
import { CiMail } from 'react-icons/ci'
import useFirestore from '../hooks/useFirestore'
import useUploadImage from '../hooks/useUploadImage'

interface ITeamMember {
  name: string
  position: string
  imageUrl: string | null
  about: string
  email: string
  linkedInUrl: string | null
  instagramUrl: string | null
  githubUrl: string | null
}

const Admin: React.FC = () => {
  const { data, addDocument } = useFirestore<ITeamMember>('TeamMember')
  const { uploadImage } = useUploadImage()
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()

  const [memberToAdd, setMemberToAdd] = useState<ITeamMember>({
    name: '',
    position: '',
    imageUrl: '',
    about: '',
    email: '',
    linkedInUrl: '',
    instagramUrl: '',
    githubUrl: ''
  })

  const [profileImageBlob, setProfileImageBlob] = useState<File | undefined>(
    undefined
  )
  const [profileImagePreviewUrl, setProfileImagePreviewUrl] = useState<string>(
    'https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg='
  )

  const addOrUpdateMember = async () => {
    let imgUrl = ''
    if (profileImageBlob) {
      imgUrl = await uploadImage(
        profileImageBlob,
        'teamMembers',
        memberToAdd.email
      )
    }
    // console.log({ ...memberToAdd, imageUrl })
    await addDocument({ ...memberToAdd, imageUrl: imgUrl })

    onClose()
  }

  const processEmail = (email: string): string =>
    email.endsWith('@gmail.com') ? email : `${email.split('@')[0]}@gmail.com`

  const profileImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setProfileImageBlob(file)
      const reader = new FileReader()

      reader.onloadend = () => {
        if (reader.result) {
          setProfileImagePreviewUrl(reader.result as string)
        }
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <div className="flex-grow p-4">
        <Tabs aria-label="Options">
          <Tab key="teamMembers" title="Team Members">
            <Card>
              <CardHeader className="justify-between">
                <div className="flex gap-5"></div>
                <Button
                  color="primary"
                  radius="full"
                  size="sm"
                  onPress={onOpen}
                >
                  Add/Update Member <FaPlus size="0.8rem" />
                </Button>
              </CardHeader>
              <CardBody>
                <Table aria-label="Example static collection table">
                  <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>POSITION</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {data.map((element: ITeamMember) => (
                      <TableRow key={element.name}>
                        <TableCell>{element.name}</TableCell>
                        <TableCell>{element.position}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        backdrop="blur"
      >
        <ModalContent className="overflow-hidden">
          <>
            <ModalHeader className="flex flex-col gap-1">
              Add/Update Member
            </ModalHeader>
            <ModalBody className="items-center">
              <Card radius="lg" className="border-none overflow-visible">
                <Image
                  alt="Profile Image"
                  className="object-cover"
                  height={100}
                  src={profileImagePreviewUrl}
                  width={200}
                />
                <CardFooter className="absolute z-10">
                  <Button isIconOnly aria-label="Profile Image">
                    <label htmlFor="profileImage">
                      <FaPen />
                      <input
                        id="profileImage"
                        type="file"
                        onChange={profileImageHandler}
                        className="hidden"
                      />
                    </label>
                  </Button>
                </CardFooter>
              </Card>

              <Input
                isRequired
                type="text"
                label="Name"
                onChange={e =>
                  setMemberToAdd(prevState => ({
                    ...prevState,
                    name: e.target.value
                  }))
                }
              />
              <Select
                onChange={e =>
                  setMemberToAdd(prevState => ({
                    ...prevState,
                    position: e.target.value
                  }))
                }
                isRequired
                label="Position"
              >
                {[
                  'President',
                  'Vice President',
                  'Treasurer',
                  'Operations Team Head',
                  'Technical Team Head',
                  'Digital Marketing Team Head',
                  'Content Creator Team Head',
                  'Operations Team Member',
                  'Technical Team Member',
                  'Digital Marketing Team Member',
                  'Content Creator Team Member'
                ].map(position => (
                  <SelectItem key={position} value={position}>
                    {position}
                  </SelectItem>
                ))}
              </Select>
              <Textarea
                onChange={e =>
                  setMemberToAdd(prevState => ({
                    ...prevState,
                    about: e.target.value
                  }))
                }
                isRequired
                type="text"
                label="About"
              />
              <Input
                onChange={e =>
                  setMemberToAdd(prevState => ({
                    ...prevState,
                    email: processEmail(e.target.value)
                  }))
                }
                isRequired
                type="text"
                placeholder="Uwindsor email"
                startContent={<CiMail className="text-primary" size="2rem" />}
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">
                      @uwindsor.ca
                    </span>
                    <span className="text-danger">*</span>
                  </div>
                }
              />
              <Input
                onChange={e =>
                  setMemberToAdd(prevState => ({
                    ...prevState,
                    instagramUrl: e.target.value
                  }))
                }
                type="text"
                placeholder="Instagram link"
                startContent={
                  <FaInstagram className="text-instagram" size="1.5rem" />
                }
              />
              <Input
                onChange={e =>
                  setMemberToAdd(prevState => ({
                    ...prevState,
                    linkedInUrl: e.target.value
                  }))
                }
                type="text"
                placeholder="LinkedIn link"
                startContent={
                  <FaLinkedin className="text-linkedin" size="1.5rem" />
                }
              />
              <Input
                onChange={e =>
                  setMemberToAdd(prevState => ({
                    ...prevState,
                    githubUrl: e.target.value
                  }))
                }
                type="text"
                placeholder="Github link"
                startContent={
                  <FaGithub className="text-github" size="1.5rem" />
                }
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={addOrUpdateMember}>
                Add
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Admin
