#include <stdio.h>
#include <stdlib.h>

// Define the structure for a queue node
typedef struct Node {
    int data;
    struct Node* next;
} Node;

// Define the structure for a queue
typedef struct Queue {
    Node* front;
    Node* rear;
} Queue;

// Function to create a new node
Node* createNode(int data) {
    Node* newNode = (Node*) malloc(sizeof(Node));
    if (!newNode) {
        printf("Memory error\n");
        return NULL;
    }
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Function to create a new queue
Queue* createQueue() {
    Queue* q = (Queue*) malloc(sizeof(Queue));
    if (!q) {
        printf("Memory error\n");
        return NULL;
    }
    q->front = q->rear = NULL;
    return q;
}

// Function to check if the queue is empty
int isEmpty(Queue* q) {
    return (q->front == NULL);
}

// Function to add an element to the queue
void enqueue(Queue* q, int data) {
    Node* temp = createNode(data);
    if (q->rear) {
        q->rear->next = temp;
        q->rear = temp;
    } else {
        q->front = q->rear = temp;
    }
}

// Function to remove an element from the queue
void dequeue(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty\n");
        return;
    }
    Node* temp = q->front;
    q->front = temp->next;
    if (q->front == NULL) {
        q->rear = NULL;
    }
    free(temp);
}

// Function to print the queue
void printQueue(Queue* q) {
    Node* temp = q->front;
    while (temp) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

// Main function
int main() {
    Queue* q = createQueue();
    enqueue(q, 1);
    enqueue(q, 2);
    enqueue(q, 3);
    printQueue(q);  // Output: 1 2 3
    dequeue(q);
    printQueue(q);  // Output: 2 3
    return 0;
}