/** TodoMVC model definitions **/

declare interface TodoItemData {
  id?: TodoItemId;
  text?: string;
  completed?: boolean;
}

declare type TodoItemId = number;

declare type TodoFilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

declare type TodoStoreState = TodoItemData[];

declare interface HostState {
  hostStep: number
  connectedClients: any[]
  serverId: string
}

