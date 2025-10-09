"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, Clock, CheckCircle, AlertCircle, DollarSign } from "lucide-react"
import { EscrowPayment, MilestonePayment } from "@/lib/types/african-marketplace"

interface EscrowPaymentSystemProps {
  escrowPayment: EscrowPayment
  onApproveMilestone?: (milestoneId: string) => void
  onDispute?: () => void
  isClient?: boolean
  isAukier?: boolean
}

export function EscrowPaymentSystem({ 
  escrowPayment, 
  onApproveMilestone, 
  onDispute,
  isClient = false,
  isAukier = false 
}: EscrowPaymentSystemProps) {
  const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'approved': return 'bg-blue-100 text-blue-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />
      case 'approved': return <CheckCircle className="h-4 w-4" />
      case 'pending': return <Clock className="h-4 w-4" />
      case 'rejected': return <AlertCircle className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  const totalAmount = escrowPayment.milestones.reduce((sum, milestone) => sum + milestone.amount, 0)
  const completedAmount = escrowPayment.milestones
    .filter(m => m.status === 'completed' || m.status === 'approved')
    .reduce((sum, milestone) => sum + milestone.amount, 0)
  const progressPercentage = (completedAmount / totalAmount) * 100

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Escrow Payment Protection
          </CardTitle>
          <Badge variant="outline" className={getStatusColor(escrowPayment.status)}>
            {escrowPayment.status.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Payment Overview */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Total Amount</p>
            <p className="text-2xl font-bold">MWK {totalAmount.toLocaleString()}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Released</p>
            <p className="text-2xl font-bold text-green-600">MWK {completedAmount.toLocaleString()}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Payment Progress</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Milestones */}
        <div className="space-y-4">
          <h4 className="font-medium">Payment Milestones</h4>
          <div className="space-y-3">
            {escrowPayment.milestones.map((milestone, index) => (
              <Card 
                key={milestone.id} 
                className={`p-4 ${
                  selectedMilestone === milestone.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedMilestone(milestone.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{milestone.description}</p>
                      <p className="text-sm text-muted-foreground">
                        {milestone.percentage}% - MWK {milestone.amount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(milestone.status)}>
                      {getStatusIcon(milestone.status)}
                      <span className="ml-1">{milestone.status}</span>
                    </Badge>
                    
                    {isClient && milestone.status === 'completed' && (
                      <Button 
                        size="sm" 
                        onClick={(e) => {
                          e.stopPropagation()
                          onApproveMilestone?.(milestone.id)
                        }}
                      >
                        Approve
                      </Button>
                    )}
                  </div>
                </div>
                
                {milestone.completedAt && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Completed: {new Date(milestone.completedAt).toLocaleDateString()}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-2">
            <Shield className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium text-blue-800">Your Money is Safe</p>
              <p className="text-blue-700">
                Funds are held securely until work milestones are completed and approved. 
                You can dispute any payment within 7 days if you're not satisfied.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {isClient && escrowPayment.status === 'pending' && (
            <Button variant="outline" onClick={onDispute}>
              <AlertCircle className="h-4 w-4 mr-2" />
              Dispute Payment
            </Button>
          )}
          
          {isAukier && escrowPayment.status === 'pending' && (
            <Button variant="outline">
              <Clock className="h-4 w-4 mr-2" />
              Request Release
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
