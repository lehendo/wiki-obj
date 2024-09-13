'use client'

import { useChat } from 'ai/react'
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '~/components/ui/chat/chat-bubble'
import { ChatInput } from '~/components/ui/chat/chat-input'
import { ChatMessageList } from '~/components/ui/chat/chat-message-list'
import { Button } from '~/components/ui/button'
import { Send } from "lucide-react"

export default function ImageChatbot() {
    const { messages, input, handleInputChange, handleSubmit } = useChat()

    return (
        <div className="flex flex-col h-full">
            <ChatMessageList className="flex-grow overflow-y-auto mb-4">
                {messages.map((message, index) => (
                    <ChatBubble key={index} layout={message.role === 'user' ? 'user' : 'ai'}>
                        <ChatBubbleAvatar src='' fallback={message.role === 'user' ? 'US' : 'AI' }/>
                        <ChatBubbleMessage layout={message.role === 'user' ? 'user' : 'ai'}>
                            {message.content}
                        </ChatBubbleMessage>
                    </ChatBubble>
                ))}
            </ChatMessageList>
            <form onSubmit={handleSubmit} className="flex items-center">
                <ChatInput
                    value={input}
                    onChange={handleInputChange}
                    className="flex-grow mr-2"
                />
                <Button type="submit" size="icon">
                    <Send className="size-4" />
                </Button>
            </form>
        </div>
    )
}