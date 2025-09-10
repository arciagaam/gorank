import { SendIcon } from 'lucide-react'
import { getGameById } from '~/services/game';
import { useParams } from 'react-router';
import { twMerge } from 'tailwind-merge';
import { useState, useEffect, useRef, useCallback } from 'react';

type Message = {
    id: string;
    userId: string;
    username: string;
    content: string;
    timestamp: Date;
    avatar?: string;
    type: 'sender' | 'receiver';
};

const dummyMessages: Message[] = [
    {
        id: '1',
        userId: 'user1',
        username: 'JuanCruz',
        content: 'Uy mga pre! Ready na ba kayo sa laro mamaya?',
        timestamp: new Date('2024-01-15T10:30:00'),
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '2',
        userId: 'currentUser',
        username: 'You',
        content: 'Oo naman! Anong oras tayo magkikita dun?',
        timestamp: new Date('2024-01-15T10:32:00'),
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        type: 'sender'
    },
    {
        id: '3',
        userId: 'user3',
        username: 'MiguelReyes',
        content: 'Mga 15 minutes early tayo para makapag warm up pa',
        timestamp: new Date('2024-01-15T10:35:00'),
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '4',
        userId: 'user1',
        username: 'JuanCruz',
        content: 'Sige pre! Dalhan nyo na rin yung mga extra na bola',
        timestamp: new Date('2024-01-15T10:37:00'),
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '5',
        userId: 'currentUser',
        username: 'You',
        content: 'Huy wag kalimutan ang tubig ha! Init ngayon eh',
        timestamp: new Date('2024-01-15T10:40:00'),
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        type: 'sender'
    },
    {
        id: '6',
        userId: 'currentUser',
        username: 'You',
        content: 'Naka-ready na lahat! Excited na ako mag-laro 😊',
        timestamp: new Date('2024-01-15T10:42:00'),
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        type: 'sender'
    },
    {
        id: '7',
        userId: 'user5',
        username: 'CarlosMendoza',
        content: 'Tara na mga bro! See you later sa court!',
        timestamp: new Date('2024-01-15T10:45:00'),
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '8',
        userId: 'user3',
        username: 'MiguelReyes',
        content: 'Guys, may nakalimutan ba tayo? Checklist muna',
        timestamp: new Date('2024-01-15T10:47:00'),
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '9',
        userId: 'currentUser',
        username: 'You',
        content: 'Bola ✓ Tubig ✓ Towel ✓ Good vibes ✓',
        timestamp: new Date('2024-01-15T10:48:00'),
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        type: 'sender'
    },
    {
        id: '10',
        userId: 'user6',
        username: 'RyanSantos',
        content: 'Hoy mga pre! Traffic dito sa EDSA, baka ma-late ako ng konti',
        timestamp: new Date('2024-01-15T10:50:00'),
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '11',
        userId: 'user1',
        username: 'JuanCruz',
        content: 'Okay lang yan bro, maghihintay naman kami',
        timestamp: new Date('2024-01-15T10:52:00'),
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '12',
        userId: 'currentUser',
        username: 'You',
        content: 'Ingat sa daan pre! Wag mag-rush',
        timestamp: new Date('2024-01-15T10:53:00'),
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        type: 'sender'
    },
    {
        id: '13',
        userId: 'user7',
        username: 'AlexTorres',
        content: 'Mga bro, sino mag-referee natin ngayon?',
        timestamp: new Date('2024-01-15T10:55:00'),
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '14',
        userId: 'user3',
        username: 'MiguelReyes',
        content: 'Ako na lang, fair naman ako mag-referee haha',
        timestamp: new Date('2024-01-15T10:56:00'),
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '15',
        userId: 'currentUser',
        username: 'You',
        content: 'Hahaha sige Miguel, pero wag mo kami i-bias ha!',
        timestamp: new Date('2024-01-15T10:57:00'),
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        type: 'sender'
    },
    {
        id: '16',
        userId: 'user5',
        username: 'CarlosMendoza',
        content: 'Mga pre, nandito na ako sa facility. Maganda yung court!',
        timestamp: new Date('2024-01-15T11:00:00'),
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '17',
        userId: 'user8',
        username: 'DanielCruz',
        content: 'Wow early bird si Carlos! Papunta na rin ako',
        timestamp: new Date('2024-01-15T11:02:00'),
        avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '18',
        userId: 'currentUser',
        username: 'You',
        content: 'Sige mga pre, paalis na rin ako dito. See you all!',
        timestamp: new Date('2024-01-15T11:05:00'),
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        type: 'sender'
    },
    {
        id: '19',
        userId: 'user1',
        username: 'JuanCruz',
        content: 'Game na mga pre! Makikita na natin kung sino ang champion ngayon!',
        timestamp: new Date('2024-01-15T11:07:00'),
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '20',
        userId: 'user6',
        username: 'RyanSantos',
        content: 'Nandito na ako sa parking! 2 minutes na lang',
        timestamp: new Date('2024-01-15T11:10:00'),
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '21',
        userId: 'user9',
        username: 'MarkLopez',
        content: 'Mga bro, may extra jersey ba kayo? Nakalimutan ko yung akin',
        timestamp: new Date('2024-01-15T11:12:00'),
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '22',
        userId: 'user5',
        username: 'CarlosMendoza',
        content: 'Meron ako extra dito Mark, same size tayo',
        timestamp: new Date('2024-01-15T11:13:00'),
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '23',
        userId: 'currentUser',
        username: 'You',
        content: 'Nandito na ako! Nakita ko na si Carlos sa court',
        timestamp: new Date('2024-01-15T11:15:00'),
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        type: 'sender'
    },
    {
        id: '24',
        userId: 'user10',
        username: 'JoshGarcia',
        content: 'Mga pre, sorry late ako! Nandito na sa gate',
        timestamp: new Date('2024-01-15T11:17:00'),
        avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    },
    {
        id: '25',
        userId: 'user3',
        username: 'MiguelReyes',
        content: 'Okay na mga pre! Complete na tayo, let\'s start warming up!',
        timestamp: new Date('2024-01-15T11:20:00'),
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        type: 'receiver'
    }
];





export default function GameChat() {
    const { id } = useParams();
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMoreMessages, setHasMoreMessages] = useState(true);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    if (!id) {
        return <div>Chat not found</div>
    }

    const game = getGameById(id);

    if (!game) {
        return <div>Chat not found</div>
    }

    // Load initial messages
    useEffect(() => {
        loadInitialMessages();
    }, []);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const loadInitialMessages = () => {
        // Simulate loading initial messages (last 10 messages)
        const initialMessages = dummyMessages.slice(-10);
        setMessages(initialMessages);
    };

    const loadMoreMessages = useCallback(async () => {
        if (isLoading || !hasMoreMessages) return;

        setIsLoading(true);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const currentMessageCount = messages.length;
        const startIndex = Math.max(0, dummyMessages.length - currentMessageCount - 10);
        const endIndex = dummyMessages.length - currentMessageCount;
        
        if (startIndex <= 0) {
            setHasMoreMessages(false);
        } else {
            const newMessages = dummyMessages.slice(startIndex, endIndex);
            setMessages(prev => [...newMessages, ...prev]);
        }
        
        setIsLoading(false);
    }, [messages.length, isLoading, hasMoreMessages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop } = e.currentTarget;
        
        // Load more messages when scrolled to top
        if (scrollTop === 0 && hasMoreMessages && !isLoading) {
            loadMoreMessages();
        }
    }, [loadMoreMessages, hasMoreMessages, isLoading]);

    const handleSendMessage = () => {
        if (!newMessage.trim()) return;

        const message: Message = {
            id: Date.now().toString(),
            userId: 'currentUser',
            username: 'You',
            content: newMessage.trim(),
            timestamp: new Date(),
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
            type: 'sender'
        };

        setMessages(prev => [...prev, message]);
        setNewMessage('');
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="flex flex-col w-full h-[calc(100vh-4rem)] overflow-hidden">

            <div className="flex flex-col w-full h-full">
                <div className="flex flex-col bg-white p-4 px-4 md:px-36 shadow flex-shrink-0">
                    <h1 className="text-lg md:text-xl font-semibold">{game.name}</h1>
                    <p className="text-sm md:text-base text-gray-600">{game.facility?.location}</p>
                </div>

                <div className="flex flex-col flex-1 px-4 md:px-36 pb-10 md:pb-10 min-h-0">

                    <div 
                        className="flex flex-col flex-1 overflow-y-auto min-h-0" 
                        id="messages-container"
                        ref={messagesContainerRef}
                        onScroll={handleScroll}
                    >
                        {/* Loading indicator at top */}
                        {isLoading && (
                            <div className="flex justify-center py-4">
                                <div className="text-sm text-gray-500">Loading more messages...</div>
                            </div>
                        )}
                        
                        {/* Messages */}
                        {messages.map((message) => (
                            <div key={message.id} className="flex flex-col mb-4">
                                <div className={twMerge("flex items-start gap-2 md:gap-3", message.type === 'sender' ? 'flex-row-reverse' : 'flex-row')}>
                                    <img 
                                        src={message.avatar} 
                                        alt={message.username}
                                        className="w-6 h-6 md:w-8 md:h-8 rounded-full flex-shrink-0"
                                    />
                                    <div className={twMerge("flex flex-col max-w-[85%] md:max-w-xs", message.type === 'sender' ? 'items-end' : 'items-start')}>
                                        <div className={twMerge(
                                            "px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-sm",
                                            message.type === 'sender' 
                                                ? 'bg-blue-500 text-white rounded-br-sm' 
                                                : 'bg-gray-100 text-gray-900 rounded-bl-sm'
                                        )}>
                                            <p className="text-sm md:text-sm leading-relaxed">{message.content}</p>
                                        </div>
                                        <div className="flex items-center gap-1 mt-1">
                                            <span className="text-xs text-gray-500">{message.username}</span>
                                            <span className="text-xs text-gray-400">•</span>
                                            <span className="text-xs text-gray-400">
                                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        {/* Scroll anchor for auto-scroll to bottom */}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="flex rounded-full bg-white border border-gray-200 py-2 md:py-2 px-3 md:px-4 shadow focus-within:shadow-md w-full flex-shrink-0 mt-4">
                        <input
                            type="text"
                            placeholder="Type your message here"
                            className="outline-none w-full text-sm md:text-base"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button 
                            onClick={handleSendMessage}
                            disabled={!newMessage.trim()}
                            className="disabled:opacity-50 disabled:cursor-not-allowed p-1 md:p-0"
                        >
                            <SendIcon className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
