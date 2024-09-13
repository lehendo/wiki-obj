'use client'

import { useChat } from 'ai/react'
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '~/components/ui/chat/chat-bubble'
import { ChatInput } from '~/components/ui/chat/chat-input'
import { ExpandableChat, ExpandableChatHeader, ExpandableChatBody, ExpandableChatFooter } from '~/components/ui/chat/expandable-chat'
import { ChatMessageList } from '~/components/ui/chat/chat-message-list'
import { Button } from '~/components/ui/button'
import { Send } from "lucide-react";

export default function ChatSupport() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
}