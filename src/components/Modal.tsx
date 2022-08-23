import {
    Modal, ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/modal";
import { useOfac } from "../utils/isBanned";
import React from "react";

interface Props {
    account?: string | null;
    ofacUrl?: string
}

export const OFACModal: React.FC<Props> = (props) => {
    const account = props.account;
    const url = props.ofacUrl;
    const {isBanned} = useOfac(account || '0x0', url);

    return (
        <>
            <Modal onClose={()=>{}} isOpen={isBanned} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Ineligible Account</ModalHeader>
                    <ModalBody>
                        This account is not eligible to use this website.

                        Our compliance filters prohibit certain wallet addresses from using this UI.
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
